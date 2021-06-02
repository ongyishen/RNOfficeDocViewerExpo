import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { OfficeViewer } from "@sishuguojixuefu/react-native-office-viewer";

export default function App() {
  handlePress = () => {
    // OpenFile.openDoc(
    //   [
    //     {
    //       url: "https://calibre-ebook.com/downloads/demos/demo.docx",
    //       fileNameOptional: "test filename",
    //     },
    //   ],
    //   (error, url) => {}
    // );
    //https://file-examples.com/index.php/sample-documents-download/
    //https://github.com/sishuguojixuefu/react-native-office-viewer
  };

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <OfficeViewer
        containerStyle={{ marginTop: 10 }}
        source="https://file-examples-com.github.io/uploads/2017/02/file_example_XLS_10.xls"
      /> */}
      <OfficeViewer
        containerStyle={{ marginTop: 10 }}
        source="https://calibre-ebook.com/downloads/demos/demo.docx"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
