fn main() {
    let x = 5;
    let y = 6;
    let z = calculate(&x, y);
    println!("The value of z is: {}", z);
    print!("The value of x is: {}", x);

    let mut s = String::from("hello");

    change(&mut s);

    let mut s1 = String::from("hello");

    print!("=>");
    let r1 = &s1;

    print!("{}", r1);
}

fn calculate(x: &i32, y: i32) -> i32 {
    let z = *x + y;
    z
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
