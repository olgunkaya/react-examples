import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

/*
    Props system is used to make parameter passing between components from parent to child. Child to parent is possible too but not a commonly used thing.

    <ComponentName propertyName="value" … /> -> these properties sent to component via a props object

    Value can be a javascript variable too. 

    Comonents can be sent as a prop just like below
    <Component1>
	    <Component2>….</Component2>
    </Component1>

    Component2 is located as props.children

*/

//webpack will find the file. no need to add file extension
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 3.15"
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Olgun"
          timeAgo="Yesterday at 3.15"
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Koray"
          timeAgo="Today at 6.15"
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
