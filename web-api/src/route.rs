use crate::controllers::hello;
use actix_web::web;

pub fn routing(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("")
            .route("/hello", web::get().to(hello::hello))
            .route("/hello_params", web::get().to(hello::query_params_hello))
            .route("/{hello_age}/{name}", web::get().to(hello::parameter_hello)),
    );
}
