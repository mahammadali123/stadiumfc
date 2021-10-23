import React from 'react';
import './App.css';
import ReactHtmlParser from 'react-html-parser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please Select a List from Left Panel...',
      selectedColor: { color: 'red', label: 'Category 1' },
      completedLists: [],
      selectedList: { description: 'Please Select a List from Left Panel...' },
      lists: [
        {
          id: 1,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 2,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 3,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 4,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 5,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 6,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 7,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 8,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 9,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 10,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 11,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 12,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 13,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 14,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 15,
          title: 'Lorem Ipsum is dummy text which has no meaning however looks very similar to real text (something that you cant see)1',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
      ],
      currentPage: 1,
      listsPerPage: 5
    };
    this.colors = [
      {
        color: 'red',
        label: 'Category 1'
      },
      {
        color: 'yellow',
        label: 'Category 2'
      },
      {
        color: 'black',
        label: 'Category 3'
      },
      {
        color: 'green',
        label: 'Category 4'
      },
    ]
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

  }

  handleMouseUp() {
    let { selectedColor, lists, selectedList } = this.state;
    let decoratedText = `<span class=${selectedColor.color}>${window.getSelection().toString()}<span class="${selectedColor.color}Label">${selectedColor.label}</span></span>`
    lists[selectedList.id - 1].description = lists[selectedList.id - 1].description.replace(window.getSelection().toString(), decoratedText)

    this.setState(prevState => ({ lists, completedLists: [...prevState.completedLists, selectedList.id] }));
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { lists, currentPage, listsPerPage, selectedList, completedLists } = this.state;

    const indexOfLastTodo = currentPage * listsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - listsPerPage;
    const currentlists = lists.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderLists = currentlists.map((todo, index) => {
      return <div key={index} className="row list"
        role="presentation"

        onClick={() => {
          this.setState({ selectedList: todo })
        }}
      >
        <div className="number" >{todo.id}</div>
        <div className="ellipsis">{todo.title}</div>
        <div

        ><img width="20px" height="20px" src={completedLists.includes(todo.id) ? "/assets/checkIcon.svg" : "/assets/minus.svg"} alt="Minus" /></div>
      </div>;
    });

   
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(lists.length / listsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div
          className="pageNumber"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </div>
      );
    });




    return (
      <div className="root row ">
        <div>
          <div className="listSection">
            {renderLists}
            <div className="row pageNumberSection">
              <div className="navIcon"
                  role="presentation"
                  onClick={() => {
                    if (currentPage !== 1) {
                      this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }))
                    }
                  }}
              >
                <img width="40px" height="40px" src="/assets/prev.png" alt="Previos" />
              </div>
              {renderPageNumbers}
              <div className="navIcon"
                role="presentation"
                onClick={() => {
                  if (currentPage !== 3) {
                    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }))
                  }
                }}
              >
                <img width="40px" height="40px" src="/assets/next.svg" alt="Next" />

              </div>
            </div>
          </div>

        </div>
        <div
          className="body"
          onMouseUp={this.handleMouseUp}

        >
          {ReactHtmlParser(selectedList.description)}
          <div className="note">
            Note: 
            <br />      
            *** Select Text From Above Paragrapg Using Cursor
            <br />
            ** Selected Text will be Decorated as per Instructions

          </div>
        </div>
        <div className="colorsPanel">
          {this.colors.map(item => {
            return <div className="row color">
              <input checked={item.color === this.state.selectedColor.color ? true : false} type="radio" name="colors"
                onClick={() => this.setState({ selectedColor: item })}
              />
              <div style={{ backgroundColor: item.color }} className="icon"></div>

              {item.label}
            </div>
          })}
        </div>
      </div>
    );

  }
}

export default App;
