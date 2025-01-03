function TodoCounter({ total, complete }) {
    return (
        <h1>
            Has completado {complete} de {total} TODOs
        </h1>
    );
}

export { TodoCounter };