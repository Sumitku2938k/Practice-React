import { Send, CircleCheck  } from 'lucide-react';

const AlertItem = ({ alert }) => {
    return (
        <div className="bg-gray-950 p-3 rounded-md border border-gray-800 space-y-1">
            <div className="flex justify-between">
                <p className="font-medium text-sm">{alert.type}  -  {alert.id}</p>
                <span className={`text-xs px-2.5 py-1 rounded-full border ${alert.status === "active" ? "border-red-700 text-red-700" : "border-blue-700 text-blue-700"}`}>
                    {alert.status}
                </span>
            </div>
            <p className="text-xs text-gray-400">{alert.name} ({alert.id})</p>
            <div className="flex gap-2 mt-2">
                <button className="flex-1 text-xs bg-gray-800 py-1 rounded flex items-center hover:bg-gray-900 "><CircleCheck className='p-1'/>Acknowledge</button>
                <button className="flex-1 text-xs bg-blue-600 py-1 px-1 rounded flex items-center hover:bg-blue-700"><Send className='p-1'/>Dispatch Police</button>
            </div>
        </div>
    );
};

export default AlertItem;
