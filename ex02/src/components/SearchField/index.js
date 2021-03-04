import React from "react";
import "./style.css";

const SearchField = props => {
  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search here"
        onChange={props.onSearchChanged}
      />
    </div>
  );
};

export default SearchField;

// const SearchField = () => {
//   const inputChangeHandler = (e) => {
//     console.log(e.target.value);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         className="search"
//         placeholder="Search here"
//         onChange={inputChangeHandler}
//       />
//     </div>
//   );
// };

// class SearchField extends React.Component {
//   // event handler (no need to write const for constructor) it gets transformed by bable
//   state = { inputValue: "", completed: false };
//   inputChangeHandler = (e) => {
//     console.log(e.target.value);
//     //XXXXX this.state=event.target.value XXXXXXX only for the first time you can initialize like this!
//     this.setState({ inputValue: e.target.value });
//     console.log(this.state.inputValue);
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           className="search"
//           placeholder="Search here"
//           onChange={this.inputChangeHandler}
//         />
//       </div>
//     );
//   }
// }
