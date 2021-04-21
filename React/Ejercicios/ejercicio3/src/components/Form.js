

export default function Form() {


    return (
        <div>
            <form action="" class="w-75 m-auto p3">
            <input class="form-control m-3" list="datalistOptions" id="exampleDataList" placeholder="Introduce un nombre" />
            <input class="form-control m-3" list="datalistOptions" id="exampleDataList" placeholder="Introduce los apellidos" />
            <input class="form-control m-3" list="datalistOptions" id="exampleDataList" placeholder="Introduce la dirección" />
            <input class="form-control m-3" list="datalistOptions" id="exampleDataList" placeholder="Introduce la provincia" />
            <input class="form-control m-3" list="datalistOptions" id="exampleDataList" placeholder="Introduce el código postal" />
            <input class="form-control m-3" list="datalistOptions" id="exampleDataList" placeholder="Introduce el número de teléfono" />
            <button type="button" class="btn btn-success m-3 w-25">Registrar</button>
            </form>
            
        </div>
    )
}
