import { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames/bind";
import styles from "./loading.scss";
let scoped = classNames.bind(styles);

class Loading extends Component {
  render() {
    let templete;
    !this.props.component || this.props.LoadingFlag
      ? (templete = (
          <img
            src={"../../logo.svg"}
            className={scoped("loadingIcon")}
            alt="Loading"
          />
        ))
      : (templete = this.props.component);
    return templete;
  }
}
// 將store中的items值傳綁到props上
const mapStateToProps = (store) => ({
  LoadingFlag: store.loading,
});

export default connect(mapStateToProps)(Loading);
