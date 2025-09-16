export default function Loop(){
    let arr=[1,2,3,4,5,6,7,8,9,10];
    let emp=[
        {id:1,name:"Amit",salary:50000},
        {id:2,name:"Sumit",salary:40000},
        {id:3,name:"Ramit",salary:30000},
        {id:4,name:"Pankaj",salary:60000},
        {id:5,name:"Ankit",salary:5000},
    ]
    return (
        <>
           
            <div>
                <table border={1} cellPadding={10} cellSpacing={0}>
                    <caption>Employee Data</caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>SALARY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emp.map((e)=>
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.salary}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
            
        </>
    )
}

