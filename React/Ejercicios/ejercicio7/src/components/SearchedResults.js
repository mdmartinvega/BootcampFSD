import Card from '../components/Card';

export default function SearchedResults({searchedMovies, input, setInput}) {
    return (
        
    <div className="upcomings container-cards">
        {
            searchedMovies.map(movie => {
                return (
                    <Card movie={movie}/>
                )
            })
        }
    
    </div>)
}
