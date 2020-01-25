# Numerical Analyzer

### Live at [https://numerical-analyzer.netlify.com/](https://numerical-analyzer.netlify.com/)

## Things Used :
1) [Svelte js](https://svelte.dev/) (Wanted to use it for a loooong time)
2) [Chart js](https://www.chartjs.org/) (For those charts)
3) [Bulma](https://bulma.io/) (For CSS and Flex-Box)
4) [Math js](https://mathjs.org/) (For equations and calculations)

## What this does :
This web-app solves and graphs any first order ordinary diffrential equation by using 5 numerical methods which are single-stepped   
It will also provide you with the base formula and local and global errors along with detailed calculations

> This uses svelte, which means once the site is loaded it can work offline :)

## Example:
### Let's say we take :
* dy/dx = x
* Method = Euler's Forward Method
* Range : 0 < x < 4
* Step size : 0.2
* y(0) = 0

Now if we solve this analytically we have y = x^2/2 and at x = 4, y(x = 4) = 8   
Since we also know the analytical solution we'll graph it along with the numerical-solution   
Now change the methods to see which gives the correct answer !!!

## How can this be used :
* Can be used as a quick checking tool of the numerical-solution in diffrent methods with just few clicks and see their accuracies
* Can be used to visualise the graphs along with the analytical solution so that you can see the error of the method with the analytical solution
* Of course this can be used as a teaching tool

## Future of this project
* Due to some time constrains I was able to include 1st order ODE single-step methods only but in future this will support nth order equations in both ODE and PDE and also multi-step processes
* A parallel project would be created for solving simultaneous nth order ODE/PDE which will use this project as a refrence and take the methods from here
