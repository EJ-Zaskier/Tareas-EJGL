# Tareas: lista de pendientes en Angular

Aplicación sencilla para agregar tareas, marcarlas como completadas y eliminarlas. La hice como práctica de los fundamentos de Angular: componentes, modelos, data binding y pruebas unitarias.

*Angular 12 · TypeScript · Karma / Jasmine*

## Funciones

- Agregar tareas nuevas.
- Marcar o desmarcar una tarea como completada.
- Eliminar tareas.

## Estructura

```text
src/app/components/navbar   barra de navegación
src/app/components/tareas   lista y formulario de tareas
src/app/models/Tarea        modelo (nombre, estado)
```

## Ejecutar

```bash
npm install
npx ng serve
```

Abre `http://localhost:4200`.

## Pruebas

```bash
npx ng test
```
