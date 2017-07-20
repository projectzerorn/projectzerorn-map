import {
    NativeModules
} from 'react-native';
const ProjectzerornMapNative = NativeModules.ProjectzerornMap;

export default class ProjectzerornMap {


    static testPrint(str) {
        ProjectzerornMapNative.testPrint(str);
    }
}