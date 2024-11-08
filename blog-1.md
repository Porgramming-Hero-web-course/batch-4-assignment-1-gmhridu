
# The Significance of Union and Intersection Types in TypeScript

TypeScript enhances JavaScript with strong typing, and **Union** and **Intersection** types are key tools for flexible and safer code. Here’s a quick overview of what they are, why they matter, and some practical examples.

## What Are Union and Intersection Types?

### Union Types (`|`)

Union types allow a variable to hold multiple types using `|`. Useful when a value could be one of several types.

```typescript
type Status = "success" | "error";
let requestStatus: Status = "success"; // valid values only

### Intersection Types (&)
Intersection types combine multiple types into one with &. Ideal for cases where an object must satisfy multiple type requirements.
interface Name {
  firstName: string;
  lastName: string;
}

interface ContactInfo {
  email: string;
  phone: string;
}

// Combine both Name and ContactInfo into a single type using an intersection
type Person = Name & ContactInfo;

const person: Person = {
  firstName: "Alice",
  lastName: "Johnson",
  email: "alice@example.com",
  phone: "123-456-7890",
};

Why Use Them?
They make code safer, flexible, and maintainable by allowing clear and structured data handling.
