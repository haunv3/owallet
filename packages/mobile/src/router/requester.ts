import {
  Message,
  MessageRequester,
  OWalletError,
  Result
} from '@owallet/router';
import { JSONUint8Array } from '@owallet/router';
import EventEmitter from 'eventemitter3';
import { RNRouterBackground, RNRouterUI } from './rn-router';

export class RNMessageRequesterBase implements MessageRequester {
  constructor(
    protected readonly eventEmitter: EventEmitter,
    protected readonly getSender: () => {
      url: string;
      origin: string;
    } = () => {
      // By default, `getSender` returns the informations as internal sender.
      // If the sender is not internal, you should provider your own sender.
      return {
        url: 'react-native://internal',
        origin: 'react-native://internal'
      };
    }
  ) {}

  async sendMessage<M extends Message<unknown>>(
    port: string,
    msg: M
  ): Promise<M extends Message<infer R> ? R : never> {
    msg.validateBasic();

    console.log('in send message mobile with msg: ', msg);

    const sender = this.getSender();

    // Set message's origin.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    msg['origin'] = sender.origin;

    if (this.eventEmitter.listenerCount('message') === 0) {
      throw new Error('There is no router to send' + JSON.stringify(msg));
    }

    const result: Result = JSONUint8Array.unwrap(
      await new Promise((resolve) => {
        this.eventEmitter.emit('message', {
          message: {
            port,
            type: msg.type(),
            msg: JSONUint8Array.wrap(msg)
          },
          sender: {
            // WARNING: Currently, handle the message only as internal.
            id: 'react-native',
            url: sender.url,
            resolver: resolve
          }
        });
      })
    );

    console.log('result send msg: ', result);

    if (!result) {
      throw new Error('Null result');
    }

    if (result.error) {
      if (typeof result.error === 'string') {
        throw new Error(result.error);
      } else {
        throw new OWalletError(
          result.error.module,
          result.error.code,
          result.error.message
        );
      }
    }

    return result.return;
  }
}

export class RNMessageRequesterInternal extends RNMessageRequesterBase {
  constructor() {
    super(RNRouterBackground.EventEmitter);
  }
}

export class RNMessageRequesterInternalToUI extends RNMessageRequesterBase {
  constructor() {
    super(RNRouterUI.EventEmitter);
  }
}

export class RNMessageRequesterExternal extends RNMessageRequesterBase {
  constructor(
    getSender: () => {
      url: string;
      origin: string;
    }
  ) {
    super(RNRouterBackground.EventEmitter, getSender);
  }
}
