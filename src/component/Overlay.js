import * as React from 'react';

export const OverlayTheme = React.createContext(false);

class Overlay extends React.Component {
  static contextType = OverlayTheme;
  render() {
    let overlayClass = "game-overlay";
    console.log(this.context);
    if(this.context) {
      overlayClass = "game-overlay overlay-on";
    }
    return (
      <div className={overlayClass}>
        <div className="center-div">
          <div id="victory-text">勝利！</div>
          <button id="restart-btn" onClick={() => this.props.onClick()}>
            重新開始
          </button>
        </div>
      </div>
    );
  }
}

export default Overlay;
