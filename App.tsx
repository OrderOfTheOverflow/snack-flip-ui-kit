import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Colors from './themes/colors';
import Icons from './themes/icons';
import { DefaultCheckbox, RadioButton, DashedLine, Line, FieldDropdown, CardKYC } from 'kit-ui-flip-v2-demo';

const dataActive = [
	{
		key: 'opt1',
		text: 'Option 1',
	},
	{
		key: 'opt2',
		text: 'Option 2',
	},
];

const dataDisabled = [
	{
		key: 'opt3',
		text: 'Option 3',
	},
	{
		key: 'opt4',
		text: 'Option 4',
	},
];

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [opt1, setOpt1] = useState(false);

  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.demoTitle}>UI KIT V2 DISPLAY</Text>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Checkbox</Text>
        <DefaultCheckbox
          isActive={isActive}
          setIsActive={setIsActive}
          title="Checkbox 1"
          disabled={false}
        />
        <DefaultCheckbox
          isActive={opt1}
          setIsActive={setOpt1}
          title="Checkbox 2"
          disabled={false}
        />
        <DefaultCheckbox title="Checkbox 3" disabled={true} />
      </View>
      <DashedLine
        dashLength={5}
        dashThickness={1}
        dashColor={Colors.lightGrey}
        style={styles.dash}
      />
      <View style={styles.container}>
        <Text style={styles.textTitle}>Radio Button</Text>
        <RadioButton data={dataActive} disabled={false} />
        <RadioButton data={dataDisabled} disabled={true} />
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Dividers</Text>
        <DashedLine
          dashLength={5}
          dashThickness={1}
          dashColor={Colors.lightGrey}
          style={styles.dash}
        />
        <Line borderColor={Colors.customBlack30Percent} style={styles.line} />
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Dropdown</Text>
        <View style={{ marginTop: 15 }}>
          <FieldDropdown
            placeholder="contoh dropdown 1"
            sourceIcon={Icons.defaultIcon}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <FieldDropdown
            placeholder="contoh dropdown 2"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.textTitle}>KYC Process Card</Text>
          <CardKYC
            isPoint={51}
            isFailedOrRejectedKYC={false}
            isPendingKYC={false}
            isIdentityNumberFilled={false}
            isNewlyCreatedAccount={true}
          />
          <CardKYC
            isPoint={50}
            isFailedOrRejectedKYC={true}
            isPendingKYC={true}
            isIdentityNumberFilled={false}
            isNewlyCreatedAccount={false}
          />
        </View>
      </View>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 55,
  },
  demoTitle: {
    textAlign: 'center',
    paddingVertical: 10,
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    padding: 25,
    marginTop: 20,
  },
  textTitle: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  dash: {
    marginHorizontal: 15,
  },
  line: {
    marginHorizontal: 15,
  },
});