export default function() {

  // Register <--> Login
  this.transition(
    this.fromRoute('auth.login'),
    this.toRoute('auth.register'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  // Logging in
  this.transition(
    this.fromRoute('auth'),
    this.toRoute('app'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
