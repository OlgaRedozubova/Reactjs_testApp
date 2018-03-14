import React, { Component } from 'react';

import {
  ActiveUser,
  UsersList,
  SearchInput,
  SortingBtn,
} from '../../components';

import url from '../../data.txt';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.sortType = { age: true, name: true };

    this.state = {
      data: null,
      activeUser: null,
      //activeNumber:0,
      errorMassage:false,
      errorSearch:false,
      currentPage:0,
    };
  }
  handleClickHeader = (item, index) => {
    //console.log(index);
  }

  componentWillMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.initialData = data;
        this.setState({
          data: this.initialData,
          activeUser: data[0],

        })
      })
  }

  updateApp(config) {
    //const users = this.state.data;
    this.setState(config);

    if (config.activeUser) {
      if (config.activeUser.id === this.state.activeUser.id) {
        this.setState({
          errorMassage: true,
        })
      } else {
        this.setState({
          errorMassage: false,
        })
      }
    }
  /*  if (config.activeUser === this.state.activeNumber ) {
      this.setState({
        errorMassage: true,
      })
    }else{
      users.length > 0 &&
      users.map(item => {
        if(item.id === config.activeUser) {
          this.setState({
            activeUser: item,
            activeNumber: item.id,
            errorMassage:false,
          })
        }
      });
    }*/
  }

  search = (e) => {
    const value = e.target.value.toLowerCase();

    const filter = this.initialData.filter(
      user => {
        return user.name.toLowerCase().includes(value);
      });

    this.updateApp({
      data: filter,
      currentPage:0,
    });

    if (filter.length > 0) {
      this.setState({
        errorSearch:false,
      })
    }else {
      this.setState({
        errorSearch:true,
      })
    }
  };

  splitUsers = () => {
    return this.state.data &&
      this.state.data.slice(this.state.currentPage * 15, this.state.currentPage * 15 + 15)
  };

  handlePagination = (number) => {
    const current =this.state.currentPage;

    if (current + number >= 0 && current + number < Math.ceil(this.state.data.length /15)) {
      this.setState(prev => ({
        currentPage: prev.currentPage + number
      })
      )
    }
  };


  sort = (type) => {
    const data = this.state.data;
    const isSorted = this.sortType[type]; // получаем порядок сортировки
    let direction = isSorted ? 1 : -1; // устанавливаем направление сортировки

    const sorted = data.slice().sort((a, b) => {
      return a[type] === b[type] ? 0 : a[type] > b[type] ? direction : direction * -1;
    });

    this.updateApp({
      data: sorted,
    });
    this.sortType[type]= !isSorted;
  };

  reset = () => {
    this.updateApp({
      data: this.initialData,
      activeUser: 0,
    });
  };

  render() {

    return (
      <div className='home'>
        <div className="home__header">
          <SearchInput
            searchValue = {this.search.bind(this)}
            isError = {this.state.errorSearch}
          />
          <SortingBtn
            sort = {this.sort}
            reset = {this.reset}
            sortType = {this.sortType}
          />
        </div>
        <div className="home__content">
          <div className="home__sidebar">
            <ActiveUser
              activeUser={this.state.activeUser}
            />
            {
              this.state.errorMassage &&
                <h1>
                  Error
                </h1>
            }
          </div>
          <div className="home__wrapUsers">
            <div className="usersHeader">
              <h2 className='usersHeader__title'>Users</h2>
            </div>
            <UsersList
//              data={this.state.data}
              data={this.splitUsers()}
              usersAll={this.state.data}
              currentPage={this.state.currentPage}
              handlePagination={this.handlePagination}
              updateApp={this.updateApp.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;