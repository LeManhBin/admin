export const userColums = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 70 
    },
    { 
        field: 'user', 
        headerName: 'User', 
        width: 230,
        renderCell: (params) => {
            return (
              <div className="cell-with-img">
                <img className="cell-img" src={params.row.img}/>
                {params.row.username}
              </div>
            )
        }
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230,       
    },
    {
        field: 'age',
        headerName: 'Age',
        with: 230
    },
    {
        field: 'status',
        headerName: 'Status',
        with: 100,
        renderCell: (params) => {
            return (
                <>
                    <div className={`cell-with-status ${params.row.status}`}>
                    {params.row.status}
                    </div>
                </>
            )
        }
    },

]

export const userRows = [
    {
        id: 1,
        username: 'Bin',
        img: "https://kiemtientuweb.com/ckfinder/userfiles/images/anh-rose/rose-2.jpg",
        status: "active",
        email: "llemanhbin@gmail.com",
        age: 18,
    },
    {
        id: 2,
        username: 'Bin2',
        img: "https://kiemtientuweb.com/ckfinder/userfiles/images/anh-rose/rose-2.jpg",
        status: "passive",
        email: "llemanhbin2@gmail.com",
        age: 19,
    },
    {
        id: 3,
        username: 'Bin3',
        img: "https://kiemtientuweb.com/ckfinder/userfiles/images/anh-rose/rose-2.jpg",
        status: "pending",
        email: "llemanhbin3@gmail.com",
        age: 20,
    },
    {
        id: 4,
        username: 'Bin4',
        img: "https://kiemtientuweb.com/ckfinder/userfiles/images/anh-rose/rose-2.jpg",
        status: "active",
        email: "llemanhbin4@gmail.com",
        age: 21,
    },
    {
        id: 5,
        username: 'Bin5',
        img: "https://kiemtientuweb.com/ckfinder/userfiles/images/anh-rose/rose-2.jpg",
        status: "active",
        email: "llemanhbin5@gmail.com",
        age: 22,
    },
]