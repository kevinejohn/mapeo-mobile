// @flow
import * as React from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import api from "../api";

export default class MapStyleProvider extends React.Component<
  { children: (styleURL: string) => React.Node },
  { styleURL: string }
> {
  state = {
    styleURL: MapboxGL.StyleURL.Outdoors
  };

  async componentDidMount() {
    try {
      const offlineStyleURL = api.getMapStyleUrl("default");
      // Check if the mapStyle exists on the server
      await api.getMapStyle("default");
      this.setState({ styleURL: offlineStyleURL });
    } catch (e) {
      // If we don't have a default offline style, don't do anything
    }
  }

  render() {
    return this.props.children(this.state.styleURL);
  }
}