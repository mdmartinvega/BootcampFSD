import Paginator from './Paginator';
import SearchedResults from './SearchedResults';
import Upcomings from './Upcomings';

export default function Input({input, setInput, searchedMovies, setSearchedMovies, upcomingsMovies, setUpcomingsMovies, page, setPage}) {
    return (
        <div className="input">
             <form><input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder="What film would you like to watch?"/>
            </form>

            <div className="index">{
                input
                ? <SearchedResults searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies} input={input} setInput={setInput}/>
                : <Upcomings upcomingsMovies={upcomingsMovies} setUpcomingsMovies={setUpcomingsMovies} />
                
            } 
            <Paginator upcomingsMovies={upcomingsMovies} page={page} setPage={setPage}/>      
            </div>          
        </div>
    )
}


