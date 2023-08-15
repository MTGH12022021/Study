use std::io;

fn sum(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    //todo Data Type
    let integer = 40;
    let float = 3.4;
    let guess: i32 = "42".parse().expect("Not a number!");
    println!("integer: {integer}");
    println!("float: {float}");
    println!("guess: {guess}");

    //todo The Character Type
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';
    println!("Character type: {c}, {z}, {heart_eyed_cat}");

    //todo The Tuple Type
    let tup: (i64, f64, u8) = (500, 6.4, 1);
    let (_x, _y, _z) = tup;

    let _five_hundred = tup.0;
    let _six_point_four = tup.1;
    let _one = tup.2;

    println!("Tuple type: {_z} or {_five_hundred}");

    //todo The Array Type
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // let a: [i32; 5] = [1, 2, 3, 4, 5];

    let a = [1, 2, 3, 4, 5];

    // println!("Please enter an array index.");

    // let mut index = String::new();

    // io::stdin()
    //     .read_line(&mut index)
    //     .expect("Failed to read line");

    // let index: usize = index
    //     .trim()
    //     .parse()
    //     .expect("Index entered was not a number");

    // let element = a[index];

    // println!("The value of the element at index {index} is: {element}");

    //todo function
    let sum = sum(23, 12);
    println!("Sum is: {sum}");

    //todo control flow
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}");
}
