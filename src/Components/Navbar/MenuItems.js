export const MenuItems = [
    {
        title:"Home",
        url:"/",
        cName:"nav-link",
        dropdown: []
    },
    {
        title:"Products",
        url:"/products",
        cName: "nav-link",
        dropdown: [
            {
                id:"1",
                title: "Subcategory 1",
                path: "/subcategory1",
                cName: "dropdown-link"
            },
            {
                id:"2",
                title: "Subcategory 2",
                path: "/subcategory2",
                cName: "dropdown-link"
            }
        ]
    },
    {
        title: "Sign up",
        url: "/signup",
        cName: "nav-link-mobile",
        dropdown: []
    },
]