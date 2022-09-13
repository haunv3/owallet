import React, { FunctionComponent, ReactElement, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FlatList, Image, StyleSheet, View, Animated } from 'react-native';
import { Text, Tab } from '@rneui/base';
import { colors, metrics, spacing, typography } from '../../themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  convertAmount,
  formatContractAddress,
  _keyExtract
} from '../../utils/helper';
import { AddIcon, DownArrowIcon } from '../../components/icon';
import { PageWithScrollViewInBottomTabView } from '../../components/page';
import Accordion from 'react-native-collapsible/Accordion';
import { useSmartNavigation } from '../../navigation.provider';
import ProgressiveImage from '../../components/progessive-image';

// hard code data to test UI
// const nftsData = [
//   {
//     title: 'SamORAI Collections',
//     data: [
//       {
//         uri: 'https://picsum.photos/id/1002/200',
//         title: 'The Empire State Building',
//         oraiPrice: '49.14 ORAI'
//       },
//       {
//         uri: 'https://picsum.photos/id/1002/200',
//         title: 'The Empire State Building',
//         oraiPrice: '49.14 ORAI'
//       },
//       {
//         uri: 'https://picsum.photos/id/1002/200',
//         title: 'The Empire State Building',
//         oraiPrice: '49.14 ORAI'
//       }
//     ]
//   },
//   {
//     title: 'Kawaii Island',
//     data: [
//       {
//         uri: 'https://picsum.photos/id/1002/200',
//         title: 'The Empire State Building',
//         oraiPrice: '49.14 ORAI'
//       },
//       {
//         uri: 'https://picsum.photos/id/1002/200',
//         title: 'The Empire State Building',
//         oraiPrice: '49.14 ORAI'
//       },
//       {
//         uri: 'https://picsum.photos/id/1002/200',
//         title: 'The Empire State Building',
//         oraiPrice: '49.14 ORAI'
//       }
//     ]
//   }
// ];

export const NftsScreen: FunctionComponent = observer(props => {
  const [index, setIndex] = useState<number>(0);
  const [activeSection, setActiveSection] = useState([0]);
  const smartNavigation = useSmartNavigation();

  const { nfts } = props.route?.params;

  //function shadow
  const _renderSectionTitle = section => {};
  const _renderHeader = (section, _, isActive) => {
    return (
      <View
        style={{
          ...styles.containerSectionTitle
        }}
      >
        <Text
          style={{
            ...typography.h7,
            fontWeight: '400'
          }}
        >
          {section.title}
        </Text>
        <View
          style={{
            marginLeft: spacing['14']
          }}
        >
          <DownArrowIcon color={colors['black']} height={16} />
        </View>
      </View>
    );
  };
  const _renderContent = section => {
    return (
      <View
        style={{
          height: 456,
          marginBottom: spacing['16']
        }}
      >
        <FlatList
          data={section.data}
          renderItem={_renderFlatlistItem}
          keyExtractor={_keyExtract}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };
  const _updateSections = activeSection => {
    setActiveSection(activeSection);
  };
  const _renderFlatlistItem = ({ item }) => (
    <TouchableOpacity
      style={styles.flatListItem}
      onPress={() => {
        smartNavigation.navigateSmart('Nfts.Detail', { item });
      }}
    >
      <ProgressiveImage
        source={{
          uri: item.picture ?? item.url
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: spacing['12'],
          alignItems: 'flex-start'
        }}
      >
        <Text
          style={{
            ...typography.h7,
            color: colors['gray-900'],
            fontWeight: '700'
          }}
        >
          {item.name.length > 8 ? formatContractAddress(item.name) : item.name}
        </Text>

        <Text
          style={{
            ...typography.h7,
            color: colors['gray-900'],
            fontWeight: '500'
          }}
        >
          {item.offer
            ? item.version === 1
              ? `${convertAmount(item.offer.amount)} ${item.offer.denom}`
              : `${convertAmount(item.offer.lowestPrice)} ${item.offer.denom}`
            : ''}
        </Text>

        {/* <Text
          style={{
            ...typography.h7,
            color: colors['gray-300'],
            fontWeight: '500'
          }}
        >{`$ ${58.23}`}</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <PageWithScrollViewInBottomTabView>
      <View>
        <Text
          style={{
            ...styles.title
          }}
        >
          {`My NFTs`}
        </Text>

        <View
          style={{
            ...styles.container
          }}
        >
          <View
            style={{
              marginTop: spacing['12'],
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: spacing['32']
            }}
          >
            {['NFTs'].map((title: string, i: number) => (
              <TouchableOpacity
                key={i}
                style={{ ...styles.containerTab }}
                onPress={() => setIndex(i)}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: index === i ? colors['gray-900'] : colors['gray-300']
                  }}
                >
                  {title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              ...styles.containerCollection
            }}
          >
            {nfts.length > 0 ? (
              <Accordion
                sections={[
                  {
                    title: 'NFTs',
                    data: nfts
                  }
                ]}
                activeSections={activeSection}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={_updateSections}
                underlayColor={colors['transparent']}
              />
            ) : (
              <View style={styles.transactionListEmpty}>
                <Image
                  source={require('../../assets/image/not_found.png')}
                  resizeMode="contain"
                  height={142}
                  width={142}
                />
                <Text
                  style={{
                    ...typography.subtitle2,
                    color: colors['gray-300'],
                    marginTop: spacing['8']
                  }}
                >
                  {`No result found`}
                </Text>
              </View>
            )}
          </View>

          {/* <TouchableOpacity
            style={{
              ...styles.containerBtn
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  marginTop: 5
                }}
              >
                <AddIcon size={24} color={colors['white']} />
              </View>
              <Text
                style={{
                  ...typography.h6,
                  color: colors['white'],
                  fontWeight: '700',
                  marginLeft: spacing['8']
                }}
              >
                {`Add NFT`}
              </Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    </PageWithScrollViewInBottomTabView>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['white'],
    borderRadius: spacing['24']
  },
  containerTab: {},
  title: {
    ...typography.h3,
    fontWeight: '700',
    textAlign: 'center',
    color: colors['gray-900'],
    marginTop: spacing['12'],
    marginBottom: spacing['12']
  },
  containerBtn: {
    backgroundColor: colors['purple-900'],
    borderRadius: spacing['8'],
    marginHorizontal: spacing['24'],
    paddingVertical: spacing['16'],
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing['12']
  },
  flatListItem: {
    backgroundColor: colors['gray-50'],
    borderRadius: spacing['12'],
    width: (metrics.screenWidth - 60) / 2,
    marginHorizontal: spacing['6'],
    padding: spacing['12'],
    marginVertical: spacing['6']
  },
  itemPhoto: {
    width: (metrics.screenWidth - 120) / 2,
    height: (metrics.screenWidth - 120) / 2,
    borderRadius: spacing['6']
  },
  containerCollection: {
    marginHorizontal: spacing['24'],
    marginTop: spacing['32']
  },
  containerSectionTitle: {
    flexDirection: 'row',
    marginBottom: spacing['16']
  },
  transactionListEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 200
  }
});
