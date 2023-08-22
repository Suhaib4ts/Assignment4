function table(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Institute</th>
                    </tr>
                </thead>
                <tbody>
                    {props.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.institute}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default table;