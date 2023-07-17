Al usar `async` y `await`, se puede escribir código asíncrono de manera síncrona. Esto significa que el código se ejecuta en el orden en que se escribe, lo que hace que sea más fácil de leer y entender. Cuando se usa `async` y `await`, el código espera a que se resuelva una promesa antes de continuar con la siguiente línea de código.

Por otro lado, cuando se usa el método `then()`, se está trabajando con promesas. El método `then()` se llama cuando la promesa se resuelve y recibe el resultado de la promesa como argumento. El método `then()` es útil cuando se trabaja con varias promesas encadenadas.

La principal diferencia entre `async`, `await` y el método `then()` es que `async` y `await` hacen que el código asíncrono parezca síncrono, mientras que el método `then()` trabaja con promesas y no hace que el código parezca síncrono. Además, cuando se usa `async` y `await`, es más fácil manejar errores porque los errores pueden ser capturados con un bloque try-catch.
