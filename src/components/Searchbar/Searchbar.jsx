import { Component } from 'react';
import css from '../styles.css';

class Searchbar extends Component {
  state = { inputValue: '' };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

    handleSubmit = event => {
      event.preventDefault();
      const inputValue = this.props;
      console.log(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            value={inputValue}
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            className={css.SearchForm - input}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
