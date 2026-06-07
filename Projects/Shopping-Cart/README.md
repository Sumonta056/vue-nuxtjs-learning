## Intro to Vue 3

1. ref : ref is like a reactive variable that hold value and helps to achieve reactivity in vue 3.
2. reactivity : It is a way to make data reactive between script and template.
3. v-bind: It is used to bind data dynamically to HTML attributes. like :class, :style etc.
4. V-if : Conditional rendering of elements based on a boolean expression. V-else-if and V-else can also be used for multiple conditions.
5. V-for : It is used to render a list of items by iterating over an array or object.
6. Watch : It is used to watch for changes in a reactive data property and execute a function when that property changes.
7. V-On: It is used to listen to DOM events and execute methods when those events are triggered. like @click, @submit etc.
8. Class and Style Binding: Vue 3 allows dynamic binding of classes and styles using the v-bind directive or its shorthand syntax (:). Example: :class="{ active: isActive }" or :style="{ color: activeColor }".
9. computed(): Computed properties are used to create derived state based on reactive data. They are cached and only re-evaluated when their dependencies change.
10. toRefs(): toRefs is a function that converts a reactive object into a plain object where each property is a ref. This is useful when destructuring reactive objects while maintaining reactivity.
11. emit(): emit is used to send custom events from a child component to its parent component, allowing communication between components.
12. defineProps(): defineProps is a function used in the script setup syntax to define the props that a component can accept from its parent component.
13. reactive(): reactive is a function that creates a reactive object, allowing for deep reactivity in Vue 3 applications.
14. v-model: reactive two-way data binding between form input elements and component data properties.
15. onMounted(): A lifecycle hook that is called after the component has been mounted to the DOM. It is often used for performing actions that require the component to be present in the DOM, such as fetching data or manipulating the DOM elements.
16. useRoute(): A function provided by Vue Router to access the current route object, which contains information about the current route, such as path, params, query, etc.
17. useRouter(): A function provided by Vue Router to access the router instance, allowing programmatic navigation and route manipulation within components.
18. 

