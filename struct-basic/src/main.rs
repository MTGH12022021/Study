// //todo struct
// #[derive(Debug)]
// struct Rectangle {
//     width: u32,
//     height: u32,
// }

// impl Rectangle {
//     fn area(&self) -> u32 {
//         self.width * self.height
//     }

//     fn can_hold(&self, other: &Rectangle) -> bool {
//         self.width > other.width && self.height > other.height
//     }

//     fn square(size: u32) -> Self {
//         Self {
//             width: size,
//             height: size,
//         }
//     }

//     fn set_with(&mut self) {
//         self.width = 21;
//     }

//     fn get_with(&self) -> u32 {
//         self.width
//     }
// }

// fn main() {
//     let mut rect1 = Rectangle {
//         width: 30,
//         height: 50,
//     };

//     println!(
//         "The area of the rectangle with width: {} is {} square pixels.",
//         rect1.get_with(),
//         rect1.area()
//     );

//     rect1.set_with();
//     let square: Rectangle = Rectangle::square(12);
//     println!(
//         "The area of the rectangle with width: {} is {} square pixels.",
//         rect1.get_with(),
//         rect1.area()
//     );
// }

//todo enum
#[derive(Debug, Clone)]
struct User {
    username: String,
    email: String,
}

fn main() {
    #[derive(Debug)]
    enum Phone {
        Iphone,
        SamSung(String),
        _Readme(String),
    }
    print!("{:?}", Phone::Iphone);
    print!("{:?}", Phone::SamSung(String::from("SamSung")));

    let user1 = User {
        username: String::from("user1"),
        email: String::from("user1@gmail.com"),
    };

    let user2 = user1.clone();

    println!("user1: {:?}", user1);
    println!("user2: {:?}", user2);
}
