import Card from '../components/Card';

export default function SearchedResults({searchedMovies, input, setInput}) {

    
    return (
        <div className="input">

        <form><input 
        value={input} 
        onChange={e => setInput(e.target?.value)} 
        placeholder="¿Qué película quieres buscar?"/>
        
        </form>

    <div className="upcomings container-cards">
        {
            searchedMovies.map(movie => {
                return (
                    <Card movie={movie}/>
                )
            })
        }
    </div>
    </div>)
}
