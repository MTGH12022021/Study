// #![allow(dead_code)]
// default mod
mod controllers;
mod route;

use crate::route::routing;

use actix_web::{
    middleware::{DefaultHeaders, Logger, NormalizePath},
    App, HttpServer,
};
use env_logger::Env;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init_from_env(Env::default().default_filter_or("info"));
    HttpServer::new(|| {
        App::new()
            .configure(routing)
            .wrap(NormalizePath::trim())
            .wrap(DefaultHeaders::new().add(("Content-type", "application/json")))
            .wrap(Logger::new("%a %{User-Agent}i"))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
