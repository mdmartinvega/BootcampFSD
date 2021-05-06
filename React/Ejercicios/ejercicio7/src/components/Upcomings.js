import Card from '../components/Card';

export default function Upcomings({upcomingsMovies}) {

    
    return  (
        <div className="upcomings container-cards">
            {
                upcomingsMovies.map(movie => {
                    return (
                        <Card movie={movie}/>
                    )
                })  
            }      
        </div>
    )
    
}
