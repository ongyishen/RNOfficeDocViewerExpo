import { Divider, Layout, TopNavigation } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OfficeViewer } from "@sishuguojixuefu/react-native-office-viewer";

export default function ExcelScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <TopNavigation title="Excel" alignment="center" />
      <Divider />
      <Layout style={styles.screen}>
        <OfficeViewer source="https://file-examples-com.github.io/uploads/2017/02/file_example_XLSX_1000.xlsx"></OfficeViewer>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
