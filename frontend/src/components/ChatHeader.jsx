import React from 'react'
import { useChatStore } from '../store/useChatStore'
import { X } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const ChatHeader = () => {
    const { selectedUser, setSelectedUser}= useChatStore();
    const { onlineUsers}=useAuthStore();
  return (
    <div className='p-2.5 border-b border-base-300'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                {/* Avatar */}
                <div className='avatar'>
                    <div className='size-10 rounded-full relative'>
                        <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName}/>
                    </div>
                </div>

                {/* User info */}
                <div>
                    <h3 className='font-medium'>{selectedUser.fullName}</h3>
                    <p className='text-sm text-base-content70'>
                        {onlineUsers.includes(selectedUser._id) ? "online" : "offline"}
                    </p>
                </div>
            </div>

            {/* Close button */}
            <button onClick={()=>setSelectedUser(null)}>
                <X />
            </button>
        </div>
    </div>
  )
}

export default ChatHeader

// import React from 'react';
// import { useChatStore } from '../store/useChatStore';
// import { X } from 'lucide-react';

// const ChatHeader = () => {
//     const { selectedUser, setSelectedUser } = useChatStore();
//     const onlineUsers = []; // Placeholder for now

//     return (
//         <div className="p-2.5 border-b border-base-300">
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                     {/* Avatar */}
//                     <div className="avatar">
//                         <div className="w-10 h-10 rounded-full relative">
//                             <img src={selectedUser?.profilePic || "/avatar.png"} alt={selectedUser?.fullName || "User"} />
//                         </div>
//                     </div>

//                     {/* User info */}
//                     <div>
//                         <h3 className="font-medium truncate">{selectedUser?.fullName || "User"}</h3>
//                         <p className="text-sm text-base-content70">
//                             {onlineUsers.includes(selectedUser?._id) ? "online" : "offline"}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Close button */}
//                 <button onClick={() => setSelectedUser(null)} className="text-base-content">
//                     <X />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ChatHeader;