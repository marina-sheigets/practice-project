// import { screen, fireEvent } from '@testing-library/react';
// import { Modal } from './Modal';
// import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
// describe('Modal', () => {
//     test('renders modal content when opened', () => {
//         renderComponent(<Modal isOpened={true}>Test Content</Modal>);
//         expect(screen.getByText('Test Content')).toBeInTheDocument();
//     });

//     test('applies "opened" class when isOpened is true', () => {
//         renderComponent(<Modal isOpened={true}>Test Content</Modal>);
//         const modal = screen.getByTestId('modal');
//         expect(modal).toHaveClass('opened');
//     });

//     test('calls onClose when clicking overlay', () => {
//         const onClose = jest.fn();
//         renderComponent(
//             <Modal isOpened={true} onClose={onClose}>
//                 Test Content
//             </Modal>
//         );

//         const overlay = screen.getByTestId('modal-overlay');
//         fireEvent.click(overlay);

//         expect(onClose).toHaveBeenCalled();
//     });

//     test('does not call onClose when clicking content', () => {
//         const onClose = jest.fn();
//         renderComponent(
//             <Modal isOpened={true} onClose={onClose}>
//                 Test Content
//             </Modal>
//         );

//         const content = screen.getByTestId('modal-content');
//         fireEvent.click(content);

//         expect(onClose).not.toHaveBeenCalled();
//     });

//     test('calls onClose when pressing Escape key', () => {
//         const onClose = jest.fn();
//         renderComponent(
//             <Modal isOpened={true} onClose={onClose}>
//                 Test Content
//             </Modal>
//         );

//         fireEvent.keyDown(window, { key: 'Escape' });

//         expect(onClose).toHaveBeenCalled();
//     });

//     test('does not call onClose when pressing other keys', () => {
//         const onClose = jest.fn();
//         renderComponent(
//             <Modal isOpened={true} onClose={onClose}>
//                 Test Content
//             </Modal>
//         );

//         fireEvent.keyDown(window, { key: 'Enter' });

//         expect(onClose).not.toHaveBeenCalled();
//     });

//     test('removes event listener on unmount', () => {
//         const onClose = jest.fn();
//         const { unmount } = renderComponent(
//             <Modal isOpened={true} onClose={onClose}>
//                 Test Content
//             </Modal>
//         );

//         unmount();

//         fireEvent.keyDown(window, { key: 'Escape' });
//         expect(onClose).not.toHaveBeenCalled();
//     });
// });
