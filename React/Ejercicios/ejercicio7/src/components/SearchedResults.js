import Card from '../components/Card';

export default function SearchedResults({searchedMovies, input, setInput}) {
    return (
        
    <div>
        <h1>Are you searching for...?</h1>
        <div className="upcomings container-cards">
            {
                searchedMovies.map(movie => {
                    return (
                        <Card movie={movie}/>
                    )
                })
            }
        
        </div>
    </div>
    
    )
}
