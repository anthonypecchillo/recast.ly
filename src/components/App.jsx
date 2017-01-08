class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: exampleVideoData[2],
    };
  }

  onVideoTitleClick(video) {
    console.log('You clicked me!');
    console.log('props is: ', video);
    this.setState({
      currentVideo: video

    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList handleClick={this.onVideoTitleClick.bind(this)} videos={window.exampleVideoData}/>
        </div>
      </div>
    );

  }
}








// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//         <VideoPlayer video={window.exampleVideoData[0]}/>
//       )}
      
//       }
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;