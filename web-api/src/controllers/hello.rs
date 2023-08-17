use actix_web::{web, HttpResponse};
use serde::{Deserialize, Serialize};
#[derive(Debug, Serialize, Deserialize, Clone)]
struct MyData {
    name: String,
    age: u32,
    parameter: Option<u32>,
}

pub async fn hello() -> HttpResponse {
    let my_data = MyData {
        name: "My".to_string(),
        age: 30,
        parameter: None,
    };
    HttpResponse::Ok().json(my_data)
}

pub async fn parameter_hello(path: web::Path<(u32, String)>) -> HttpResponse {
    let (age, name) = path.into_inner();
    let my_data = MyData {
        name: name,
        age: age,
        parameter: None,
    };
    HttpResponse::Ok().json(my_data)
}
