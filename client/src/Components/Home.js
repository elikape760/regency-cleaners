
function Home() {

    return (
        <div id="landing">
            <div className="d-flex h-100 text-center text-dark  ">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header className="mb-auto">
                        {/* <div>
                            <h3 className="float-md-left mb-0">CH Regency Organic Cleaners</h3>
                        </div> */}
                    </header>
                    <main className="px-3 float-md-left mb-0 text-center">
                        <h1>CH Regency Organic Cleaners</h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.  Reprehenderit quam deleniti laboriosam obcaecati, accusamus earum libero sint natus laborum aperiam tempore. Non harum voluptatum cumque vero perferendis rerum saepe beatae?</p>
                    </main>
                    <footer className="mt-auto text-black-50">
                        <p>&copy; 2022 CH Regency Organic Cleaners</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Home
// console.log(user);
// if (user) {
//     return <h1> Welcome, {user.first_name}!</h1>;
// } else {
//     return <h1>Please Login or Sign Up</h1>;
// }