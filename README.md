# Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

# Lint

### Lint Backend

```
nx run backend:lint
```

### Lint Frontend

```
nx run frontend:lint
```

# Test

### Test Backend

```
nx run frontend:test
```

### Test Frontend

```
nx run frontend:test
```

# Build

The build artifacts are storedin the output directory (e.g. `dist/` or `build/`), ready to be deployed.

### Build Backend
To build the backend application, run 
```
nx run backend:build
```

### Build Frontend

To build the frontend application, run 
```
nx run frontend:build
```

# Migrate Database
```
npx prisma migrate dev
```

# Seed Database
```
```

# View Backend Database
```
npx prisma studio
```

# Run

### Start Backend application

```
nx run backend:serve
```

### Start Frontend application
```
nx run frontend:serve
```

# View Project graph

To view the graph of the workspace, run
```
nx graph
```