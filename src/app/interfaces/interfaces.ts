interface IFile {
  name: string;
  content: string;
  type: string;
  size: number;
}
interface IComponent {
  icon: string;
  name: string;
  redirectTo: string;
}

export {
  IFile,
  IComponent
};
