import React, { useState, useRef } from 'react';
import { Text, Button, Alert, StyleSheet, View } from 'react-native';
import TextHeading from '../components/textHeading';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons } from '@expo/vector-icons';

const items = [
  // this is the parent or 'item'
  {
    name: 'Apple',
    id: 10,
  },
  {
    name: 'Strawberry',
    id: 17,
  },
  {
    name: 'Pineapple',
    id: 13,
  },
  {
    name: 'Banana',
    id: 14,
  },
  {
    name: 'Watermelon',
    id: 15,
  },
  {
    name: 'Kiwi fruit',
    id: 16,
  },
];

// const items = [
//   // this is the parent or 'item'
//   {
//     name: 'Fruits',
//     id: 0,
//     // these are the children or 'sub items'
//     children: [
//       {
//         name: 'Apple',
//         id: 10,
//       },
//       {
//         name: 'Strawberry',
//         id: 17,
//       },
//       {
//         name: 'Pineapple',
//         id: 13,
//       },
//       {
//         name: 'Banana',
//         id: 14,
//       },
//       {
//         name: 'Watermelon',
//         id: 15,
//       },
//       {
//         name: 'Kiwi fruit',
//         id: 16,
//       },
//     ],
//   },
// ];

export default function ({ navigation }) {
  const ref = useRef(null);
  const footer = () => {
    return (
      <Button
        color="red"
        title="cancel"
        onPress={() => ref?.current?._toggleSelector()}
      />
    );
  };
  const [chosenItems, setChosenItems] = useState([]);
  return (
    <View>
      <SectionedMultiSelect
        stickyFooterComponent={footer}
        single={true}
        hideConfirm={true}
        items={items}
        IconRenderer={MaterialIcons}
        uniqueKey="id"
        // readOnlyHeadings={true}
        // subKey="children"
        selectText="Choose just one..."
        // showDropDowns={true}
        onSelectedItemsChange={(itemChosen) => {
          console.log('this',itemChosen)
          setChosenItems(itemChosen);
        }}
        selectedItems={chosenItems}
        ref={ref}
      />
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <TextHeading> Autocomplete screen </TextHeading>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
