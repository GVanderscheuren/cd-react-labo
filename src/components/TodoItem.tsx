import { Check, CheckCircle } from 'lucide-react';
import '../style/components/todo-item.scss'

const TodoItem = () => {
  return (
    <div className="c-todo-item">
      <input className="c-todo-item-input" type="checkbox"  id="check" />
      <label className="c-todo-item-label">
        {/* TODO: Lucide icon "checkbox" */}
        <Check className="c-todo-check" />
      </label>

      <div className="c-todo-item-content">
        <p className="c-todo-item-text">Planten water geven.</p>
        <p className="c-todo-item-category">Work</p>
      </div>
    </div>
  );
};

export default TodoItem;
