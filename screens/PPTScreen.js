import { Divider, Layout, TopNavigation } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OfficeViewer } from "@sishuguojixuefu/react-native-office-viewer";

export default function PPTScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <TopNavigation title="PPT" alignment="center" />
      <Divider />
      <Layout style={styles.screen}>
        <OfficeViewer source="https://file-examples-com.github.io/uploads/2017/08/file_example_PPT_1MB.ppt"></OfficeViewer>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
