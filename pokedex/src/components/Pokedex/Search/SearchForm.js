import classes from '../Search/SearchForm.module.css';

const SearchForm = () => {
    return (
        <form>
            <input className={classes.input} type="text" id="search" name="search" defaultValue='Search' />
        </form>
    );
};

export default SearchForm;
