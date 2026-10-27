
const express = require("express");
const app = express();

app.use(express.json());

// Question 1 and 10: Orders
let orders = [
    { id: 101, item: "Laptop", amount: 50000 },
    { id: 102, item: "Mobile", amount: 15000 },
    { id: 103, item: "Tablet", amount: 25000 }
];

app.put("/orders/:id", (req, res) => {
    const id = Number(req.params.id);
    const order = orders.find(order => order.id === id);

    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }

    // Question 1: Update item and amount
    if (req.body.item !== undefined) {
        if (req.body.amount === undefined) {
            return res.status(400).json({
                message: "item and amount are required together"
            });
        }

        order.item = req.body.item;
        order.amount = req.body.amount;

        return res.json({
            message: "Order updated successfully",
            data: order
        });
    }

    // Question 10: Update only amount
    if (req.body.amount !== undefined) {
        order.amount = req.body.amount;

        return res.json({
            message: "Order amount updated successfully",
            data: order
        });
    }

    return res.status(400).json({
        message: "item and amount, or amount alone, are required"
    });
});


// Question 2 and 11: Users
let users = [
    { id: 1, name: "Raman", email: "raman@gmail.com" },
    { id: 2, name: "Ajay", email: "ajay@gmail.com" },
    { id: 3, name: "Ramanjay", email: "ramanjay@gmail.com" }
];

app.put("/users/:key", (req, res) => {
    const key = req.params.key;
    let user;

    // Numeric key means update by ID (Question 2)
    if (/^\d+$/.test(key)) {
        const id = Number(key);
        user = users.find(user => user.id === id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (req.body.name === undefined || req.body.email === undefined) {
            return res.status(400).json({
                message: "name and email are required"
            });
        }

        user.name = req.body.name;
        user.email = req.body.email;

        return res.json({
            message: "User updated successfully",
            data: user
        });
    }

    // Name key means update email by name (Question 11)
    user = users.find(
        user => user.name.toLowerCase() === key.toLowerCase()
    );

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (req.body.email === undefined) {
        return res.status(400).json({ message: "email is required" });
    }

    user.email = req.body.email;

    res.json({
        message: "User email updated successfully",
        data: user
    });
});


// Question 3: Products
let products = [
    { id: 11, name: "Mouse", price: 800 },
    { id: 12, name: "Keyboard", price: 1200 }
];

app.put("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    if (req.body.name === undefined || req.body.price === undefined) {
        return res.status(400).json({
            message: "name and price are required"
        });
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.json({
        message: "Product updated successfully",
        data: product
    });
});


// Question 4: Students
let students = [
    { roll: 101, name: "Ajay", marks: 88 },
    { roll: 102, name: "Raman", marks: 76 }
];

app.put("/students/:roll", (req, res) => {
    const roll = Number(req.params.roll);
    const student = students.find(student => student.roll === roll);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    if (req.body.marks === undefined) {
        return res.status(400).json({ message: "marks are required" });
    }

    student.marks = req.body.marks;

    res.json({
        message: "Student marks updated successfully",
        data: student
    });
});


// Question 5: Employees
let employees = [
    { id: 1, name: "Raman", dept: "HR" },
    { id: 2, name: "Ajay", dept: "IT" }
];

app.put("/employees/:id", (req, res) => {
    const id = Number(req.params.id);
    const employee = employees.find(employee => employee.id === id);

    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }

    if (req.body.dept === undefined) {
        return res.status(400).json({ message: "dept is required" });
    }

    employee.dept = req.body.dept;

    res.json({
        message: "Employee department updated successfully",
        data: employee
    });
});


// Question 6: Books
let books = [
    { id: 201, title: "Swift Basics", author: "Apple" },
    { id: 202, title: "Node.js Mastery", author: "Ryan Dahl" }
];

app.put("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (req.body.title === undefined || req.body.author === undefined) {
        return res.status(400).json({
            message: "title and author are required"
        });
    }

    book.title = req.body.title;
    book.author = req.body.author;

    res.json({
        message: "Book updated successfully",
        data: book
    });
});


// Question 7: Movies
let movies = [
    { id: 1, name: "Inception", rating: 9 },
    { id: 2, name: "Interstellar", rating: 8 }
];

app.put("/movies/:id", (req, res) => {
    const id = Number(req.params.id);
    const movie = movies.find(movie => movie.id === id);

    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }

    if (req.body.rating === undefined) {
        return res.status(400).json({ message: "rating is required" });
    }

    movie.rating = req.body.rating;

    res.json({
        message: "Movie rating updated successfully",
        data: movie
    });
});


// Question 8: Courses
let courses = [
    { id: 101, course: "Web Development", duration: "3 Months" },
    { id: 102, course: "App Development", duration: "4 Months" }
];

app.put("/courses/:id", (req, res) => {
    const id = Number(req.params.id);
    const course = courses.find(course => course.id === id);

    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    if (req.body.duration === undefined) {
        return res.status(400).json({ message: "duration is required" });
    }

    course.duration = req.body.duration;

    res.json({
        message: "Course duration updated successfully",
        data: course
    });
});


// Question 9: Cities
let cities = [
    { id: 1, name: "Delhi", population: "2 Cr" },
    { id: 2, name: "Mumbai", population: "1.8 Cr" }
];

app.put("/cities/:id", (req, res) => {
    const id = Number(req.params.id);
    const city = cities.find(city => city.id === id);

    if (!city) {
        return res.status(404).json({ message: "City not found" });
    }

    if (req.body.population === undefined) {
        return res.status(400).json({ message: "population is required" });
    }

    city.population = req.body.population;

    res.json({
        message: "City population updated successfully",
        data: city
    });
});


// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
