const [users, setUsers] = useState([]);

    const getSmth = async () => {
        await fetch("http://dummyjson.com/users")
            .then(res => res.json())
            .then(res => setUsers(res.users));
    };

    useEffect(() => {
        getSmth();
    }, []);

    useEffect(() => {
        if (users.length !== 0) console.log({ users });
    }, [users]);
