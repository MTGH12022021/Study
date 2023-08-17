use actix_web::{web, HttpResponse};
use serde::{Deserialize, Serialize};
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct MyData {
    name: String,
    age: u32,
}

pub async fn hello() -> HttpResponse {
    let my_data = MyData {
        name: "My".to_string(),
        age: 30,
    };
    HttpResponse::Ok().json(my_data)
}

pub async fn parameter_hello(path: web::Path<(u32, String)>) -> HttpResponse {
    let (age, name) = path.into_inner();
    let my_data = MyData {
        name: name,
        age: age,
    };
    HttpResponse::Ok().json(my_data)
}

pub async fn query_params_hello(query_params: web::Query<MyData>) -> HttpResponse {
    let my_data = MyData {
        name: query_params.name.clone(),
        age: query_params.age,
    };
    HttpResponse::Ok().json(my_data)
}
