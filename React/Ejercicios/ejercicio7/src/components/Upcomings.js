import Card from '../components/Card';

export default function Upcomings({upcomingsMovies}) {

    return  (
        <div>
            <h1>Upcomings</h1>
            <div className="upcomings container-cards">
            
                {
                    upcomingsMovies.results?.map(movie => {
                        return (
                            <Card movie={movie}/>
            
                        )
                    })
            
                }
            </div>
        </div>
    ) 
}
 