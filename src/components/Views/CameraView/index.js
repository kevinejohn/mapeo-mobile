// @flow
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import {
  observationCreate,
  observationUpdate
} from '../../../ducks/observations';
import { mediaSave } from '../../../ducks/media';
import { observationSource } from '../../../ducks/observationSource';
import type { StoreState } from '../../../types/redux';
import CameraView from './CameraView';
import type { Props, StateProps, DispatchProps } from './CameraView';

function mapStateToProps(state: StoreState, ownProps: Props): StateProps {
  return {
    selectedObservation: state.selectedObservation,
    showSavedModal: state.modals.saved,
    showEditorView:
      ownProps.navigation &&
      ownProps.navigation.state &&
      ownProps.navigation.state.params &&
      ownProps.navigation.state.params.showEditorView
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    createObservation: observation => dispatch(observationCreate(observation)),
    updateObservation: observation => dispatch(observationUpdate(observation)),
    updateObservationSource: () => dispatch(observationSource('camera')),
    saveMedia: meta => dispatch(mediaSave(meta))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraView);