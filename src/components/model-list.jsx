import Lista from "./list";

function ModelList({listas}) {
    return (
        <div>
            {/* Lista */}
            {listas.map(a=> <Lista list={a} />)}
        </div>
    );
}

export default ModelList;